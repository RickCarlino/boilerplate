import * as React from "react";
import * as BP from "@blueprintjs/core";

BP.Toaster.create({
    className: "my-toaster",
    position: BP.Position.BOTTOM_RIGHT,
}).show({ message: "Toasted!" });

export function KitchenSink() {

    return <div>
        <h1>Kitchen Sink</h1>
        <div>

            <BP.Tabs>
                <BP.TabList>
                    <BP.Tab>First tab</BP.Tab>
                    <BP.Tab>Second tab</BP.Tab>
                    <BP.Tab>Third tab</BP.Tab>
                    <BP.Tab isDisabled={true}>Fourth tab</BP.Tab>
                </BP.TabList>
                <BP.TabPanel>
                    First panel
                </BP.TabPanel>
                <BP.TabPanel>
                    Second panel
                </BP.TabPanel>
                <BP.TabPanel>
                    Third panel
                </BP.TabPanel>
                <BP.TabPanel>
                    Fourth panel
                </BP.TabPanel>
            </BP.Tabs>

        </div>
    </div>;
}
