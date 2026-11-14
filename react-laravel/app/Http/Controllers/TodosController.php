<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Todos;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    public function index(){
        $todos = Todos::query()->where('completed', false)->get();
        return Inertia::render('Dashboard', ['todos' => $todos]);
    }

    public function create(Request $request){
    $credential = $request->validate([
        'description'=>['required', 'min:1'],
    ]);
    Todos::create($credential);

    return redirect('/dashboard');
    }

    public function destroy(int $id){
        Todos::destroy($id);

        return redirect('/dashboard');
    }

    public function destroyAll(){
        Todos::query()->delete();

        return redirect('/dashboard');
    }

    public function completedPage()
    {
        $completedTodos = Todos::query()->where('completed', true)->get();

        return Inertia::render('Completed', [
            'completedTodos' => $completedTodos
        ]);
    }

    public function complete(int $id){
        Todos::query()->where('id', $id)->update(['completed' => true]);
        return redirect('/dashboard');
    }

}
