import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export const commitUserChanges = async (userId, changes) => {
  const { data, error } = await supabase
    .from('user_changes')
    .insert([{ user_id: userId, changes }]);

  if (error) {
    console.error('Error committing user changes:', error);
    return null;
  }

  return data;
};