import { StreamChat } from "stream-chat";

const api_key = "d9x6bkjy8je5";
const api_secret = "v4yyfn967uhd2e78y96xwgq3386remx5tp5ckuq653xv26jwzfzfmjkjf95mu57m";
// const user_id = "user_2rzkhQPkqoMWeOMRWgcjDK9xd4I";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER WAS CREATED !");
    return Response.json({ message: 'Hello World' })
}