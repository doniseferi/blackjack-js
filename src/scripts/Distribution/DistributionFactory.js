class DistributionFactory {
    create() {
        return new InitalCardDistribution(new SingleCardDistribution());
    }
}