package tmdtdemo.tmdt.utils;

import tmdtdemo.tmdt.dto.response.ProductDetailsResponse;
import tmdtdemo.tmdt.dto.response.ProductSkuResponse;
import tmdtdemo.tmdt.dto.response.ProductSpuResponse;
import tmdtdemo.tmdt.dto.response.RefreshTokenResponse;
import tmdtdemo.tmdt.entity.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Mapper {

    // map entity user to response
    public static RefreshTokenResponse refreshTokenToResponse(RefreshToken rf){
        RefreshTokenResponse response = new RefreshTokenResponse();
        response.setToken(rf.getRefreshToken());
        response.setExpiration(rf.getRefreshExpiration());
        return response;
    }

<<<<<<< HEAD
    //map entity product spu to response
    public static ProductSpuResponse productspuToResponse(ProductSpu spu){
        ProductSpuResponse response = new ProductSpuResponse();
        response.setId(spu.getId());
        response.setName(spu.getName());
        response.setDescription(spu.getDescription());
        response.setStatus(spu.isStatus());
        response.setAvailable(spu.isAvailable());

=======
<<<<<<< Updated upstream

=======
    //map entity product spu to response
    public static ProductSpuResponse productspuToResponse(ProductSpu spu,String src, Double price){
        ProductSpuResponse response = new ProductSpuResponse();
        response.setId(spu.getId());
        response.setName(spu.getName());
        response.setDescription(spu.getDescription());
        response.setStatus(spu.isStatus());
        response.setAvailable(spu.isAvailable());
        response.setSrc(src);
        response.setPrice(price);
>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
        return response;
    }

    // map list entity product spu to list response
<<<<<<< HEAD
    public static List<ProductSpuResponse> productspuToListResponses(List<ProductSpu> spus){
        List<ProductSpuResponse> responses = new ArrayList<>();
        for(ProductSpu spu : spus){
            responses.add(productspuToResponse(spu));
        }
        return responses;
    }
    // map entity product sku to response
    public static ProductSkuResponse productskuToResponse(ProductSku sku){
=======

//    public static List<ProductSpuResponse> productspuToListResponses(List<ProductSpu> spus,List<String> srcs){
//        List<ProductSpuResponse> responses = new ArrayList<>();
//        for(ProductSpu spu : spus){
//
//            responses.add(productspuToResponse(spu));
//        }
//        return responses;
//    }

    // map entity product sku to response
    public static ProductSkuResponse productskuToResponse(ProductSku sku, String src){
>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
        ProductSkuResponse response = new ProductSkuResponse();
        response.setColor(sku.getColor());
        response.setQuantity(sku.getQuantity());
        response.setPrice(sku.getPrice());
        response.setSkuId(sku.getId());
<<<<<<< HEAD

=======
        response.setSrc(src);
>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
        return response;
    }

    // map list entity product sku to product details response
<<<<<<< HEAD
    public static ProductDetailsResponse productToDetailResponse(List<ProductSku> skus, ProductSpu spu){
        ProductDetailsResponse details = new ProductDetailsResponse();
        details.setAvailable(spu.isAvailable());
        details.setDescription(spu.getDescription());
        details.setRate(spu.getRate());
        details.setName(spu.getName());
        details.setId(spu.getId());
        List<ProductSkuResponse> skuResponses = new ArrayList<>();
        skus.stream().filter(
                sku -> sku.getProductSpu().getId() == spu.getId()
        ).forEach(sku -> skuResponses.add(productskuToResponse(sku)));
        details.setSkuResponseList(skuResponses);
        return details;
    }
=======
//    public static ProductDetailsResponse productToDetailResponse(List<ProductSku> skus, ProductSpu spu){
//        ProductDetailsResponse details = new ProductDetailsResponse();
//        details.setAvailable(spu.isAvailable());
//        details.setDescription(spu.getDescription());
//        details.setRate(spu.getRate());
//        details.setName(spu.getName());
//        details.setId(spu.getId());
//        List<ProductSkuResponse> skuResponses = new ArrayList<>();
//        skus.stream().filter(
//                sku -> sku.getProductSpu().getId() == spu.getId()
//        ).forEach(sku -> skuResponses.add(productskuToResponse(sku)));
//        details.setSkuResponseList(skuResponses);
//        return details;
//    }
>>>>>>> Stashed changes
>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
}
