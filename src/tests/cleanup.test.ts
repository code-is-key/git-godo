describe('Test cleanup command utils', () => {
  describe('extract branches', () => {
    it('should not include empty item', () => {});

    it('should not include master', () => {});

    it('should not include development', () => {});
  });
});


const branchCommandOutput = `
branches-should-never-failing
this-is-a-cool-tool
regex-dont-match-all-branches
add-latest-build
dev-release-2.2.0
* development
master
release/1.1.1
`