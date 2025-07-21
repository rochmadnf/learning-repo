<?php

namespace Rochmadnf\Cli\Commands;

use Carbon\Carbon;

use function Laravel\Prompts\select;
use function Laravel\Prompts\table;
use function Termwind\render;

class SelectDateCommand
{
    public function run(): void
    {
        Carbon::setLocale(config('app.locale', 'id'));
        $timezone = config('app.timezone', 'Asia/Makassar');
        $now = Carbon::now($timezone);

        $currentYear = $now->year;
        $currentMonth = $now->month;
        $currentDay = $now->day;

        $months = [];
        for ($m = 1; $m <= $currentMonth; $m++) {
            $monthName = Carbon::createFromDate($currentYear, $m, 1, $timezone)->translatedFormat('F');
            $months[$m] = "$monthName ($m)";
        }

        $selectedMonth = (int) select(
            label: 'Pilih Bulan:',
            options: $months,
            default: $currentMonth
        );

        $daysInMonth = Carbon::createFromDate($currentYear, $selectedMonth, 1, $timezone)->daysInMonth;
        if ($selectedMonth === $currentMonth) {
            $daysInMonth = $currentDay;
        }

        $dates = [];
        for ($d = 1; $d <= $daysInMonth; $d++) {
            $dates[$d] = "Tanggal $d";
        }

        $selectedDay = (int) select(
            label: 'Pilih Tanggal:',
            options: $dates,
            default: $currentDay
        );

        $selectedDate = Carbon::createFromDate($currentYear, $selectedMonth, $selectedDay, $timezone)
            ->translatedFormat('d F Y');

        render("<div class='text-green'>Anda memilih: <span class='font-bold'>$selectedDate</span></div>");

        table(headers: ['Nama', 'Alamat'], rows: [
            ['Rochmad', 'Jati Park']
        ]);
    }
}
