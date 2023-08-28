<?php

namespace App\Traits;

use Illuminate\Support\Str;
use App\Override\MjmlPhp;

trait MjmlTrait
{
    public function mjmlParse(string $filename, array $data = [])
    {
        $mjml = file_get_contents(resource_path('emails/' . $filename . '.mjml'));

        if (count($data) > 0) {
            foreach ($data as $key => $value) {
                $mjml = Str::replace('$' . $key, $value, $mjml);
            }
        }

        return MjmlPhp::new()->toHtml($mjml);
    }
}
