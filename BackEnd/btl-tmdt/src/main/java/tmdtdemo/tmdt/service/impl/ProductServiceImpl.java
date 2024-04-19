package tmdtdemo.tmdt.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tmdtdemo.tmdt.dto.response.PageProductSpuResponse;
import tmdtdemo.tmdt.dto.response.ProductDetailsResponse;
import tmdtdemo.tmdt.entity.ProductSku;
import tmdtdemo.tmdt.entity.ProductSpu;
import tmdtdemo.tmdt.repository.ProductSkuRepo;
import tmdtdemo.tmdt.repository.ProductSpuRepo;
import tmdtdemo.tmdt.service.ProductService;
import tmdtdemo.tmdt.utils.AppConstants;
import tmdtdemo.tmdt.utils.Mapper;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductSpuRepo productSpuRepo;
    private final ProductSkuRepo productSkuRepo;
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
        return new PageProductSpuResponse(
                Mapper.productspuToListResponses(productSpuList),
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
        return Mapper.productToDetailResponse(skus,spu);
    }
}
