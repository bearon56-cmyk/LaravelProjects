<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Todos;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    public function index(){
        $todos = Todos::all();
        return Inertia::render('Dashboard', ['todos' => $todos]);
    }

    public function create(Request $request){
    $credential = $request->validate([
        'description'=>['required', 'min:1'],
    ]);
    Todos::create($credential);

    return redirect('/dashboard');
    }

    public function destroy($id){
        Todos::destroy($id);

        return redirect('/dashboard');
    }
}
