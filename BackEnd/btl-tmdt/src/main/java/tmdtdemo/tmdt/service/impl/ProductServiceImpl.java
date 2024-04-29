package tmdtdemo.tmdt.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tmdtdemo.tmdt.dto.response.PageProductSpuResponse;
import tmdtdemo.tmdt.dto.response.ProductDetailsResponse;
import tmdtdemo.tmdt.dto.response.ProductSkuResponse;
import tmdtdemo.tmdt.dto.response.ProductSpuResponse;
import tmdtdemo.tmdt.entity.ProductSku;
import tmdtdemo.tmdt.entity.ProductSpu;
import tmdtdemo.tmdt.repository.ImageRepository;
import tmdtdemo.tmdt.repository.ProductSkuRepo;
import tmdtdemo.tmdt.repository.ProductSpuRepo;
import tmdtdemo.tmdt.service.ProductService;
import tmdtdemo.tmdt.utils.AppConstants;
import tmdtdemo.tmdt.utils.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductSpuRepo productSpuRepo;
    private final ProductSkuRepo productSkuRepo;
    private final ImageRepository imageRepository;
    @Override
    public PageProductSpuResponse getAllProductSpuWithPageAndSort(Integer pageNumber, Integer pageSize, String sortBy, String dir, Long categoryId, String type) {
        Sort sort = dir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        Pageable pageable = PageRequest.of(pageNumber,pageSize,sort);
        List<ProductSpu> productSpuList = new ArrayList<>();

        Page<ProductSpu> productSpus = productSpuRepo.findProductSpusByCategoryId(categoryId,pageable);
        if(!type.equalsIgnoreCase("all")){
             productSpus = productSpuRepo.findProductSpusByCategoryIdAndType(categoryId,type,pageable);
        }
        productSpuList = productSpus.getContent();
        List<ProductSpuResponse> responses = new ArrayList<>();
        for(ProductSpu spu : productSpuList){
            Double minprice = productSkuRepo.findMinPriceByProductSpuId(spu.getId());
            ProductSpuResponse spuResponse = Mapper.productspuToResponse(spu,imageRepository.findImagesBySpuId(spu.getId()).get(0).getSrc(),minprice);
            responses.add(spuResponse);
        }
        return new PageProductSpuResponse(
                responses,
                pageNumber,
                pageSize,
                productSpus.getTotalPages(),
                (int)productSpus.getTotalElements(),
                productSpus.isLast()
        );
    }

    @Override
    public ProductDetailsResponse getProductDetail(Long id) {
        ProductSpu spu = productSpuRepo.findProductSpuById(id);
        List<ProductSku> skus = productSkuRepo.findAll();


        ProductDetailsResponse details = new ProductDetailsResponse();
        details.setAvailable(spu.isAvailable());
        details.setDescription(spu.getDescription());
        details.setRate(spu.getRate());
        details.setName(spu.getName());
        details.setId(spu.getId());
        List<ProductSkuResponse> skuResponses = skus.stream()
                .filter(sku -> sku.getProductSpu().getId() == id)
                .map(sku -> {
                    String src = imageRepository.findImageBySpuIdAndSkuId(id, sku.getId()).getSrc();
                    return Mapper.productskuToResponse(sku, src);
                })
                .collect(Collectors.toList());

        details.setSkuResponseList(skuResponses);
        return details;
    }
}
