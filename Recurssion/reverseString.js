function reverse(input){
    if(input.length === 1) return input;
    return input[input.length - 1].concat(reverse(input.slice(0, -1)));
  }
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'