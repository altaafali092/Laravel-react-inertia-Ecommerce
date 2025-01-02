<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('dash',[AdminController::class, 'index'])->name('dash');
Route::get('login',[AdminController::class, 'login'])->name('login');
