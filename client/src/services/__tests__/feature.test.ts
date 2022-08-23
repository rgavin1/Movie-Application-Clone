import feature from "../feature";


describe("Feature URLs", () => {
    describe("Call the GetFeature endpoint", () => {
        it("confirms the call was successful", async () => {
            const mockGetFeature = jest.spyOn(feature, "getFeature").mockResolvedValue({});
            const test = await feature.getFeature()

            expect(mockGetFeature).toBeCalled();
            expect(test).toBeTruthy();
        })
    });

    describe("Call the GetTrending endpoint", () => {
        it("confirms the call was successful", async () => {
            const mockGetTrending = jest.spyOn(feature, "getTrending").mockResolvedValue([]);
            const test = await feature.getTrending()

            expect(mockGetTrending).toBeCalled();
            expect(test).toBeTruthy();
        })
    });
})