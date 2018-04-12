const app = new Vue({
  el: '#media-list',
  data: {
    title: 'Treehouse Public Library',
    type: '',
    mediaList: [
      {
        title: 'Hop on Pop', 
        description: "A delightful children's book.",
        tag: 'book',
        contributor: 'Dr. Suess',
        showDetail: false,
      },
      {
        title: 'The Joy of Painting', 
        description: "Create a world of happy little trees!",
        tag: 'video',
        contributor: 'Bob Ross',
        showDetail: false
      },
      {
        title: 'Supernatural: The Complete 12th Season', 
        description: "A (literally) neverending roadtrip.",
        tag: 'video',
        contributor: "Eric Kripke",
        showDetail: false
      },
      {
        title: 'Planet Earth II', 
        description: "Hours of beautiful but heart attack-inducing nature footage",
        tag: 'streaming video',
        contributor: 'David Attenborough',
        showDetail: false,
      },
      {
        title: 'Titanic', 
        description: "The boat sinks.",
        tag: 'video',
        contributor: 'James Cameron',
        showDetail: false,
      },
      {
        title: 'The Sirens of Titan', 
        description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
        tag: 'book',
        contributor: 'Kurt Vonnegut',
        showDetail: false,
      },
      {
        title: 'Better Call Saul', 
        description: "A slow-burning Breaking Bad prequel.",
        tag: 'streaming video',
        contributor: 'Vince Gilligan',
        showDetail: false,
      }
    ]
  },
  methods: {
    toggleDetails: function(media){
      media.showDetail = !media.showDetail;
    },
    // I was suprised to see that you could reference `event`
    // even if you didn't include it as a parameter in your function.
    filterList: function(){
      this.type = event.target.value;
    }
  }, 
  computed: {
    uniqueItemsList: function(){
      // Here's an alternative way to get the unique tags from your list of media items.
      return this.mediaList
        .map(item => item.tag)
        .filter((item, index, array) => array.indexOf(item) === index);

      // And another that uses a Set.
      // return [...new Set(this.mediaList.map(item => item.tag))];

      // const tags = [];
      // this.mediaList.forEach((item) => {
      //   if (!tags.includes(item.tag)){
      //     tags.push(item.tag);
      //   }
      // });
      // return tags;
    }
  }
});