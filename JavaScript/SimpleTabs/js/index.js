window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  function simpleTabs() {
    // Node elements of our page:
    const $tabsWrapper = document.querySelector('.some-wrapper'),
      $tabs = document.querySelectorAll('.some-tabs'),
      $tabsContent = document.querySelectorAll('.some-tabs-content');

    // Hiding tabs content
    function hideTabsContent(index) {
      for (let i = index; i < $tabsContent.length; i++) {
        $tabsContent[i].classList.remove('show');
        $tabsContent[i].classList.add('hide');

        // Without classes :
        // $tabsContent[i].style.display = 'none';
        // $tabsContent[i].style.display = 'flex';
      }
    }
    hideTabsContent(1);

    // Showing tabs content
    function showTabsContent(index) {
      if ($tabsContent[index].classList.contains('hide')) {
        $tabsContent[index].classList.remove('hide');
        $tabsContent[index].classList.add('show');
      }
    }

    // Event listener for clicking on tabs. Used: Delegating events.
    $tabsWrapper.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.matches('div.some-tabs')) {
        for (let i = 0; i < $tabs.length; i++) {
          if (target == $tabs[i]) {
            hideTabsContent(0);
            showTabsContent(i);
            break;
          }
        }
      }
    });
  }

  module.exports = simpleTabs;
});
