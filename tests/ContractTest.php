<?php
// ==========================================================
// Tests :: Icons Contracts
// ==========================================================
//
// Exercises the plugin public behavior with disposable Kirby fixtures.
//
// ==========================================================

declare(strict_types=1);

namespace Zeimoto\Icons\Tests;

final class ContractTest extends PluginTestCase
{
  public function testPluginBootsWithoutHostConfiguration(): void
  {
    $app = $this->app();
    self::assertArrayHasKey("zeimoto/icons", $app->plugins());
    self::assertSame("Test site", $app->site()->title()->value());
  }
}
