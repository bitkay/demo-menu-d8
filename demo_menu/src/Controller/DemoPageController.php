<?php

namespace Drupal\demo_menu\Controller;

/**
 * Provides a static demo page based on dynamic route.
 */
class DemoPageController {

  /**
   * Provides a demo page.
   *
   * @return array
   *   The markup of our demo page.
   */
  public function content() {
    return [
      '#type' => 'markup',
      '#markup' => 'This is just a demo',
    ];
  }

}
