<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment('Vistorio inspires.');
})->purpose('Display an inspiring quote');
