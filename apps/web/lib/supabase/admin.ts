import {createClient} from '@supabase/supabase-js'

export const supabaseAdmin = (() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Missing environment variables')
    }

    return createClient(supabaseUrl, supabaseKey)
})()