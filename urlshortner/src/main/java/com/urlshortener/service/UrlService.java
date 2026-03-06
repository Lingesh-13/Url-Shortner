package com.urlshortener.service;

import com.urlshortener.entity.Url;
import com.urlshortener.repository.UrlRepository;
import com.urlshortener.util.Base62Encoder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UrlService {

    private final UrlRepository urlRepository;
    private final Base62Encoder encoder;

    public String createShortUrl(String originalUrl) {

        if (originalUrl == null || originalUrl.isBlank()) {
            throw new IllegalArgumentException("Original URL cannot be empty");
        }

        Url url = Url.builder()
                .originalUrl(originalUrl)
                .createdAt(LocalDateTime.now())
                .build();

        // First save to generate ID
        url = urlRepository.save(url);

        // Generate Base62 short code
        String shortCode = encoder.encode(url.getId());

        url.setShortCode(shortCode);

        // Save again with short code
        urlRepository.save(url);

        return shortCode;
    }

    public String getOriginalUrl(String shortCode) {

        Url url = urlRepository.findByShortCode(shortCode)
                .orElseThrow(() -> new RuntimeException("Short URL not found"));

        // Check expiry
        if (url.getExpiryDate() != null &&
                url.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Short URL has expired");
        }

        // Safe click count increment
        Long currentCount = url.getClickCount() == null ? 0L : url.getClickCount();
        url.setClickCount(currentCount + 1);

        urlRepository.save(url);

        return url.getOriginalUrl();
    }
}