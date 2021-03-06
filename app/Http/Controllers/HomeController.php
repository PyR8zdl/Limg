<?php

namespace App\Http\Controllers;

use App\Image;
use App\User;

class HomeController extends Controller
{
    /**
     * Show the home page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = (auth()->user()) ? auth()->user() : User::findOrFail(1);

        $images = Image::orderBy('created_at', 'desc')->paginate(18);

        return view('home', [
            'user' => $user,
            'images' => $images,
        ]);
    }
}
