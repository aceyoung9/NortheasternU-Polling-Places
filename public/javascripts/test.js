var dormList = [
  "Burstein Hall",
  "1110 Commonwealth Avenue",
  "10 Coventry Street",
  "Davenport Commons A",
  "Davenport Commons B",
  "Douglass Park Leased Properties",
  "East Village",
  "319 Huntington Avenue",
  "International Village",
  "Kennedy Hall",
  "Kerr Hall",
  "Levine Hall",
  "Light Hall",
  "144 Hemenway Street",
  "153 Hemenway Street",
  "Loftman Hall",
  "Melvin Hall",
  "Rubenstein Hall",
  "Smith Hall",
  "Speare Hall",
  "Stetson East",
  "Stetson West",
  "St. Stephen St. Complex",
  "West Village A North",
  "West Village A South",
  "West Village B",
  "West Village C",
  "West Village E",
  "West Village F",
  "West Village G",
  "West Village H",
  "White Hall",
  "Willis Hall"
];

// constructs the suggestion engine
var dorms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: $.map(dormList, function(state) {
    return { value: state };
  })
});

// kicks off the loading/processing of `local` and `prefetch`
dorms.initialize();

$("#prefetch .typeahead").typeahead(
  {
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: "dorms",
    displayKey: "value",
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: dorms.ttAdapter()
  }
);

// typeahead.js is overly opinionated about their gross-ass stylings.
$(".tt-hint").addClass("form-control");
