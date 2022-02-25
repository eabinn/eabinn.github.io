function getQuery() {
  var params = {};

  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });

  return params;
}

(function attachClickEventsToTags() {
  $("[data-tag]").click((e) => {
    currentTag = e.target.dataset.tag;
    filterByTagName(currentTag);
  });

  function filterByTagName(tagName) {
    $(".hidden").removeClass("hidden");
    $(".post").each((index, elem) => {
      if (!elem.hasAttribute(`data-${tagName}`)) {
        $(elem).addClass("hidden");
      }
    });
    $(`.tag`).removeClass("selected");
    $(`.tag[data-tag=${tagName}]`).addClass("selected");
  }
})();

(function setTagActiveWithUrlQuery() {
  $(document).ready(function () {
    let currentTag = "";
    const queryTag = getQuery().tag;
    if (queryTag) {
      currentTag = queryTag;
      filterByTagName(currentTag);
    }
  });
})();

(function activateFirstTag() {
  const queryTag = getQuery().tag;

  if (queryTag) {
    $(`.tag[data-tag=${queryTag}]`).addClass("selected");
  } else {
    $(`.tag`).first().addClass("selected");
  }
})();
