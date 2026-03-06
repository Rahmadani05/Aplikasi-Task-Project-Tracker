<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        //total project aktif
        $activeProjectsCount = Project::where('status', 'active')->count();

        //total task belum selesai
        $unfinishedTasksCount = Task::whereHas('category', function ($query) {
            $query->where('name', '!=', 'DONE');
        })->count();

        //daftar task yang mendekati due date
        $upcomingTasks = Task::with(['category', 'project'])
            ->whereHas('category', function ($query) {
                $query->where('name', '!=', 'DONE');
            })
            ->where('due_date', '>=', Carbon::today())
            ->orderBy('due_date', 'asc')
            ->take(5)
            ->get();

        return response()->json([
            'message' => 'Berhasil mengambil data dashboard',
            'data' => [
                'total_active_projects' => $activeProjectsCount,
                'total_unfinished_tasks' => $unfinishedTasksCount,
                'upcoming_tasks' => $upcomingTasks,
            ]
        ]);
    }
}