<?php

namespace DamonHu\Flarum;

use Flarum\Extend;

return [
    // Forum
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),

    // Admin
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    // Disable default authenticating endpoints
    // (new Extend\Routes('forum'))
    //     ->remove('login')
    //     ->post('/login', 'login.disabled', Api\ApiRouteDisabledController::class)

    //     // Disable password reset
    //     ->remove('savePassword')
    //     ->post('/reset', 'savePassword.disabled', Controller\RouteDisabledController::class)

    //     // Disable password reset token validation
    //     ->remove('resetPassword')
    //     ->get('/reset/{token}', 'resetPassword.disabled', Api\ApiRouteDisabledController::class),

    // // Remove api endpoints
    // (new Extend\Routes('api'))
    //     ->remove('forgot')
    //     ->post('/forgot', 'forgot.disabled', Api\ApiRouteDisabledController::class)

    //     ->remove('users.create')
        // ->post('/users', 'users.create', Api\CreateUserController::class),

    // Register settings to forum
    (new Extend\Settings)
        ->serializeToForum('forgotPasswordLink', 'flarum-login-modal.forgotPasswordLink', null, "")
        ->serializeToForum('replaceLoginWithFoFPassport', 'flarum-login-modal.replaceLoginWithFoFPassport', null, false)
        ->serializeToForum('changePasswordLink', 'flarum-login-modal.changePasswordLink', null, "")
        ->serializeToForum('allowChangeMail', 'flarum-login-modal.allowChangeMail', null, false)
        ->serializeToForum('signUpWelcomeText', 'flarum-login-modal.signUpWelcomeText', null, "")
];
