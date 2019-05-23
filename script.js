let app = new Vue
({
    el: '#app',
    data: 
    {
      userValue: '',
      current: {
        title: 'hello',
        author_name: '',
        first_publish_year: ''
      },
      loading: true,
    },
    created()
    {
        this.books();
    },

    methods: 
    {
        async books() 
        {
            try 
            { 
              this.loading = true;
              const response = await axios.get('http://openlibrary.org/search.json?q=' + this.userValue);
              this.current = response.data;
              this.loading = false;
              console.log(response.data);
              console.log(this.userValue);
            } catch (error) 
            {
              console.log(error);
            }
        },

        
    },
})
