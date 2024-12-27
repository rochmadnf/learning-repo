<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthenticatedUserResource extends JsonResource
{

    public static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'gravatar' => $this->gravatar(100),
            'initials' => $this->getInitials($this->name),
        ];
    }

    protected function getInitials($name): string
    {
        return implode(
            '',
            array_slice(
                array_map(
                    fn($w) => strtoupper($w[0]),
                    preg_split('/\s+/', $name)
                ),
                0,
                2
            )
        );
    }
}
