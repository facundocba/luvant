<?php
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$base = __DIR__ . '/out';

// Root
if ($uri === '/' || $uri === '') {
    readfile($base . '/index.html');
    exit;
}

// Exact file match
if (is_file($base . $uri)) {
    $ext = pathinfo($uri, PATHINFO_EXTENSION);
    $types = [
        'html' => 'text/html',
        'css'  => 'text/css',
        'js'   => 'application/javascript',
        'json' => 'application/json',
        'xml'  => 'application/xml',
        'txt'  => 'text/plain',
        'ico'  => 'image/x-icon',
        'svg'  => 'image/svg+xml',
        'woff2'=> 'font/woff2',
        'woff' => 'font/woff',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'gif'  => 'image/gif',
        'webp' => 'image/webp',
    ];
    if (isset($types[$ext])) {
        header('Content-Type: ' . $types[$ext]);
    }
    readfile($base . $uri);
    exit;
}

// Clean URL -> .html
if (is_file($base . $uri . '.html')) {
    header('Content-Type: text/html');
    readfile($base . $uri . '.html');
    exit;
}

// 404
http_response_code(404);
if (is_file($base . '/404.html')) {
    readfile($base . '/404.html');
} else {
    echo '404 Not Found';
}
