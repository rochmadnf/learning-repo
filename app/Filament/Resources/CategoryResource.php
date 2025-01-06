<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Resources\CategoryResource\RelationManagers;
use App\Models\Category;
use Filament\Forms\{Form, Set, Components, Get};
// use Filament\Forms\Form;
// use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Components\TextInput::make('name')
                    ->required()
                    ->afterStateUpdated(
                        function (Set $set, Get $get, ?string $state) {
                            // if (is_null(Category::firstWhere('slug', $get('slug')))) {
                            //     $set('slug', str()->of($state)->slug()->value);
                            // } else {
                            //     $set('slug', str()->of($state . " " . str()->random(5))->slug()->value);
                            // }
                            $set('slug', str()->of($state)->slug()->value);
                        }
                    )
                    ->live(debounce: 300)
                    ->maxLength(255),
                Components\TextInput::make('slug')
                    ->required()
                    ->disabled(),
                Components\FileUpload::make('icon')->columnSpanFull()->image()->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
