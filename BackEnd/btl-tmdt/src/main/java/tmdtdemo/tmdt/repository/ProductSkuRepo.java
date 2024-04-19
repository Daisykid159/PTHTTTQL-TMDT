package tmdtdemo.tmdt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tmdtdemo.tmdt.entity.ProductSku;

@Repository
public interface ProductSkuRepo extends JpaRepository<ProductSku,Long> {
}
