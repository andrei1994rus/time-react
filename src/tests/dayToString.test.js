const dayToString=require('../functions/dayToString');

describe('dayToString test',()=>
{
    let day;
    let dayMap;

    beforeAll(()=>
    {
        day=new Date().getDay();
        dayMap=new Map([[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]);
    })

    test('dayToString test (by date,not null and not undefined)',()=>
    {
        let received=dayToString(day,dayMap);
        expect(received).not.toBeNull();
        expect(received).not.toBeUndefined();
        expect(received).toMatchSnapshot();
    });

    test('dayToString test (by inputed parameter,not null and not undefined)',()=>
    {
        let received=dayToString(0,dayMap);
        expect(received).not.toBeNull();
        expect(received).not.toBeUndefined();
        expect(received).toMatchSnapshot();
    });

    test('dayToString test (Sunday)',()=>
    {
        expect(dayToString(0,dayMap)).toBe("Sun");
    });

    test('dayToString test (Monday)',()=>
    {
        expect(dayToString(1,dayMap)).toBe("Mon");
    });

    test('dayToString test (Tuesday)',()=>
    {
        expect(dayToString(2,dayMap)).toBe("Tue");
    });

    test('dayToString test (Wednesday)',()=>
    {
        expect(dayToString(3,dayMap)).toBe("Wed");
    });

    test('dayToString test (Thursday)',()=>
    {
        expect(dayToString(4,dayMap)).toBe("Thu");
    });

    test('dayToString test (Friday)',()=>
    {
        expect(dayToString(5,dayMap)).toBe("Fri");
    });

    test('dayToString test (Saturday)',()=>
    {
        expect(dayToString(6,dayMap)).toBe("Sat");
    });

    afterAll(()=>
    {
        day=null;
        dayMap=null;
    });
});