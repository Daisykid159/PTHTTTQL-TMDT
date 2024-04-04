package tmdtdemo.tmdt.utils;

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


}
