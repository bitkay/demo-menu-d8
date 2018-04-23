<?php

namespace Drupal\demo_menu\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\Core\Plugin\Discovery\ContainerDeriverInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides menu link definitions for the demo menu.
 */
class DemoMenuLinkDerivative extends DeriverBase implements ContainerDeriverInterface {

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, $base_plugin_id) {
    return new static();
  }

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $links = [];

    for($i = 0; $i < 30; $i++) {
      // If this is the 2nd link in every group of 5 links, switch the parent link id to the
      // previous link.
      if($i % 5 == 1) {
        $parent = 'demo_menu__pages_links:demo_menu_menu_link_' . ($i - 1);
      }
       // If this is the every-fifth link (or the very first), it is now the parent link
      if($i % 5 == 0) {
        $parent = NULL;
      }
      $links['demo_menu_menu_link_' . $i] = [
        'title' => 'Page ' . $i,
        'menu_name' => 'demo-menu',
        'route_name' => 'demo_menu_page',
        'route_parameters' => [
          'name' => $i,
        ],
        'expanded' => TRUE,
      ] + $base_plugin_definition;
      if($parent) {
        $links['demo_menu_menu_link_' . $i]['parent'] = $parent;
      }
    } // for

    return $links;
  }

}
