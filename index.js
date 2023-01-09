import * as fcl from "@onflow/fcl";
import { send as grpcSend } from '@onflow/transport-grpc';


fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('app.detail.title', 'Puddle')
  .put('decoder.Type', (val) => val.staticType)
  .put('decoder.Enum', (val) => Number(val.fields[0].value.value))
  .put('sdk.transport', grpcSend)
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
  .put('flow.network', 'testnet');


console.log("getting account now")
const { account } = await fcl.send([fcl.getAccount('0xe6d966a5544e2d91')]);
console.log("account", account)