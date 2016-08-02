const isOpen = require('./');
const assert = require('assert');

function date(y, m, d) {
  return new Date(y, m - 1, d);
}

describe('isOpen(date)', () => {
  it('2015/12/29は休み（年末年始休日）', () => {
    const d = date(2015, 12, 29);
    assert(!isOpen(d));
  });

  it('2015/12/30は休み（年末年始休日）', () => {
    const d = date(2015, 12, 30);
    assert(!isOpen(d));
  });

  it('2015/12/31は休み（年末年始休日）', () => {
    const d = date(2015, 12, 31);
    assert(!isOpen(d));
  });

  it('2015/1/1は休み（祝日）', () => {
    const d = date(2016, 1, 1);
    assert(!isOpen(d));
  });

  it('2016/1/2は休み（土曜日）', () => {
    const d = date(2016, 1, 9);
    assert(!isOpen(d));
  });

  it('2016/1/3は休み（日曜日）', () => {
    const d = date(2016, 1, 10);
    assert(!isOpen(d));
  });

  it('2016/1/4は通常営業（平日）', () => {
    const d = date(2016, 1, 4);
    assert(isOpen(d));
  });

  it('2016/8/10は通常営業（平日）', () => {
    const d = date(2016, 1, 4);
    assert(isOpen(d));
  });

  it('2016/8/11は休み（祝日）', () => {
    const d = date(2016, 8, 11);
    assert(!isOpen(d));
  });

  it('2016/8/12は休み（夏休み）', () => {
    const d = date(2016, 8, 12);
    assert(!isOpen(d));
  });

  it('2016/8/13は休み（土曜日）', () => {
    const d = date(2016, 8, 13);
    assert(!isOpen(d));
  });

  it('2016/8/13は休み（日曜日）', () => {
    const d = date(2016, 8, 14);
    assert(!isOpen(d));
  });

  it('2016/8/15は休み（夏休み）', () => {
    const d = date(2016, 8, 15);
    assert(!isOpen(d));
  });

  it('2016/8/16は休み（夏休み）', () => {
    const d = date(2016, 8, 16);
    assert(!isOpen(d));
  });

  it('2016/8/10は通常営業（平日）', () => {
    const d = date(2016, 8, 17);
    assert(isOpen(d));
  });
});
