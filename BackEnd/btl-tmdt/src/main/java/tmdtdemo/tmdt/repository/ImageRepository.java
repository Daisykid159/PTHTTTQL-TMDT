package tmdtdemo.tmdt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tmdtdemo.tmdt.entity.Image;
<<<<<<< HEAD
@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
=======

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findImagesBySpuId(Long spuId);
    Image findImageBySpuIdAndSkuId(Long spuId, Long skuId);
>>>>>>> f26d8791f7a5775e611c53499e8bc0735d488cac
}
