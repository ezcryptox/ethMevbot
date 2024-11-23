import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { GOOGLEID, GOOGLE_SECRET } from "$env/static/private";


// let GOOGLE_ID="821125452458-epkov7kh117grbql6se2md0aljcg674k.apps.googleusercontent.com"
// let GOOGLE_SECRET="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"

export const {handle, signIn } = SvelteKitAuth({
    providers:[Google({clientId: GOOGLEID, clientSecret: GOOGLE_SECRET})]
})