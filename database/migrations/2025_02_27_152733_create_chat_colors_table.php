<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chat_colors', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('from_id')->constrained('users')->cascadeOnUpdate()->restrictOnDelete();
            $table->uuidMorphs('to');
            $table->string('message_color')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat_colors');
    }
};
