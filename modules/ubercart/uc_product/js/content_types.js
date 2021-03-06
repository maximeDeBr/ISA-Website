/**
 * @file
 * Utility functions to display settings summaries on vertical tabs.
 */

(function ($, Drupal) {
  Drupal.behaviors.ucProductContentTypes = {
    attach: function attach(context) {
      var $context = $(context);

      $context.find('#edit-uc-product').drupalSetSummary(function (context) {
        var vals = [];
        $(context).find('input[name^="uc_product"]:checked').next('label').each(function () {
          vals.push(Drupal.checkPlain($(this).text()));
        });
        if (!$(context).find('#edit-uc-product-product').is(':checked')) {
          vals.unshift(Drupal.t('Not a product'));
        }
        return vals.join(', ');
      });
    }
  };
})(jQuery, Drupal);
