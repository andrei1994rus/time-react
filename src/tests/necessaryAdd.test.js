const necessaryAdd=require('../functions/necessaryAdd');

describe('necessaryAdd test',()=>
{
    test('necessaryAdd test (not null and not undefined)',()=>
    {
        expect(necessaryAdd(10)).not.toBeNull();
        expect(necessaryAdd(10)).not.toBeUndefined();
        expect(necessaryAdd(9)).not.toBeNull();
        expect(necessaryAdd(9)).not.toBeUndefined();
    });
    
    test('necessaryAdd test (<10)',()=>
    {
        expect(necessaryAdd(9)).toBe("09");
        expect(necessaryAdd(9)).not.toBe(9);
        expect(necessaryAdd(9)).not.toEqual(9);
    });

    test('necessaryAdd test (>10)',()=>
    {
        expect(necessaryAdd(11)).toEqual(11);
        expect(necessaryAdd(21)).toEqual(21);
        expect(necessaryAdd(31)).toEqual(31);
        expect(necessaryAdd(41)).toEqual(41);
        expect(necessaryAdd(51)).toEqual(51);
    });

    test('necessaryAdd test (0)',()=>
    {
        expect(necessaryAdd(0)).toBe("00");
        expect(necessaryAdd(0)).not.toBe("0");
        expect(necessaryAdd(0)).not.toEqual("0");
    });
});