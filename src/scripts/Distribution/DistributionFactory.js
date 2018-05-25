class DistributionFactory {
    getDistribution() {
        return new InitalCardDistribution(new SingleCardDistribution());
    }
}