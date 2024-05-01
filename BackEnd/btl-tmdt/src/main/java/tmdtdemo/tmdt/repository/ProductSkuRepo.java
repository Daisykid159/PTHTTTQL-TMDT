package tmdtdemo.tmdt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
=======
import org.springframework.data.jpa.repository.Query;
>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
import org.springframework.stereotype.Repository;
import tmdtdemo.tmdt.entity.ProductSku;

@Repository
public interface ProductSkuRepo extends JpaRepository<ProductSku,Long> {
<<<<<<< HEAD
=======
    //custom query
    @Query(value = "select MIN(price) from productskus where productspu_id = :productSpuId",nativeQuery = true)
    Double findMinPriceByProductSpuId(Long productSpuId);

>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
}
