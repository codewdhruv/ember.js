import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'dummy/tests/helpers';

describe('Unit | Controller | foo', function () {
  setupTest();

  // TODO: Replace this with your real tests.
  it('exists', function () {
    let controller = this.owner.lookup('controller:foo');
    expect(controller).to.be.ok;
  });
});
