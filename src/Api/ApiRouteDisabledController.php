<?php

namespace DamonHu\Flarum\Api;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;

class ApiRouteDisabledController implements RequestHandlerInterface
{
    // public function handle(ServerRequestInterface $request): ResponseInterface
    // {
    //     return new JsonResponse([
    //     ], 200);
    // }
}
