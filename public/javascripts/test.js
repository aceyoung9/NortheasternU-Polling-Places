var dorms = ["Burstein Hall",
  "Davenport Commons A",
  "Davenport Commons B",
  "International Village",
  "Kennedy Hall",
  "Kerr Hall",
  "Levine Hall",
  "Light Hall",
  "153 Hemenway Street",
  "Loftman",
  "Melvin Hall",
  "Rubenstein Hall",
  "Smith Hall",
  "Speare Hall",
  "Stetson West",
  "West Village A North",
  "West Village A South",
  "West Village B",
  "West Village C",
  "West Village E",
  "West Village F",
  "West Village G",
  "West Village H"];

// constructs the suggestion engine
var dorms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `dorms` is an array of state names defined in "The Basics",
  local: $.map(dorms, function(state) { return { value: state }; })
});

// kicks off the loading/processing of `local` and `prefetch`
dorms.initialize();

$('#prefetch .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'dorms',
  displayKey: 'value',
  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: dorms.ttAdapter()
});

  // typeahead.js is overly opinionated about their gross-ass stylings.
$(".tt-hint").addClass("form-control");
