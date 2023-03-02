const dateToString=require('../functions/dateToString');

describe('dateToString test',()=>
{
    let date;
    let dayMap;

    beforeAll(()=>
    {
        date=new Date();
        dayMap=new Map([[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]);
    })

    test('dateToString test (by date,not null and not undefined)',()=>
    {
        let received=dateToString(date,dayMap);
        expect(received).not.toBeNull();
        expect(received).not.toBeUndefined();
        expect(received).toMatchSnapshot();
    })

    afterAll(()=>
    {
        date=null;
        dayMap=null;
    })
});