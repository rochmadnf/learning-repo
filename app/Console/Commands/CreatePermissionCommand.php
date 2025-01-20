<?php

namespace App\Console\Commands;

use Spatie\Permission\Commands\CreatePermission as SpatieCreatePermission;
use Spatie\Permission\Contracts\Permission as PermissionContract;
use Spatie\Permission\Models\Permission;

use function Laravel\Prompts\text;

class CreatePermissionCommand extends SpatieCreatePermission
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permission:create-permission {name? : The name of the permission}';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name') ?? text(label: 'What is your permission name?', placeholder: 'ex: create user', required: true);
        $label = text(label: 'What is label for your permission?', placeholder: 'ex: Can create New User');
        $group = text(label: 'What is group for your permission?', placeholder: 'User', required: true);
        $guardName = text(label: 'What is guard name for your permission?', placeholder: 'web', default: 'web');

        $permission = Permission::getPermission(['name' => $name, 'guard_name' => $guardName]);

        if (!$permission) {
            $permission = Permission::query()->create(['name' => $name, 'guard_name' => $guardName, 'label' => $label, 'group' => $group]);
        }

        $this->info("Permission `{$permission->name}` " . ($permission->wasRecentlyCreated ? 'created' : 'already exists'));
    }
}
