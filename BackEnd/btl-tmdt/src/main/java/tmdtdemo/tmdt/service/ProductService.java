package tmdtdemo.tmdt.service;

import tmdtdemo.tmdt.dto.response.PageProductSpuResponse;
import tmdtdemo.tmdt.dto.response.ProductDetailsResponse;

public interface ProductService {
    PageProductSpuResponse getAllProductSpuWithPageAndSort(
            Integer pageNumber,
            Integer pageSize,
            String sortBy,
            String dir,
            Long categoryId,
            String type
    );

    ProductDetailsResponse getProductDetail(Long id);


}
