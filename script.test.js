describe('search tests', () => {
    it('should filter the fruits array based on substring ignoring case', () => {
        expect(search('Apple').length).toEqual(3);
        expect(search('av')).toEqual(['Avocado 🥑', 'Guava']);
    })
})

describe('showSuggestions test', () => {
    it('should clear suggestions on empty string', () => {
        suggestions.innerHTML = 'test'
        let res = search('')
        showSuggestions(res, '')
        expect(suggestions.innerHTML).toBe('');
    })
    it('should update class to has-suggestions if there are results from search', () => {
        res = search('av')
        showSuggestions(res, 'av')
        let curLis = document.querySelectorAll('.has-suggestions')
        expect(curLis).not.toBeNull()
    })
    it('should add new Lis based on results', () => {
        res = search('Dragonfruit');
        showSuggestions(res, 'Dragonfruit');
        let CurLis = document.querySelectorAll('li');
        expect(CurLis).not.toBeNull();
    })
})

afterEach(() => {
    input.value = '';
    suggestions.innerHTML = '';
})
