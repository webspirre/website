export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];
interface Option {
  value: string;
  label: string;
}
export type Map = string | string[] | null | Option | Option[];

export interface DesignDatabase {
  webspirre_admin: {
    Tables: {
      website: {
        Row: {
          name: string | null;
          webURL: string | null;
          pageType: string | null;
          shortDescription: string | null;
          longDescription: string | null;
          logoImageURL: string | null;
          desktopSsURL: string | null;
          mobileSsURL: string | null;
          desktopFpURL: string | null;
          mobileFpURL: string | null;
          categories: string[] | null;
          date: string | null;
          views: string | null;
          uid: string | null;
        };
        Insert: {
          name?: string | null;
          webURL?: string | null;
          pageType?: string | null;
          shortDescription?: string | null;
          longDescription?: string | null;
          logoImageURL?: string | null;
          desktopSsURL?: string | null;
          mobileSsURL?: string | null;
          desktopFpURL?: string | null;
          mobileFpURL?: string | null;
          categories?: string[] | null;
          date?: string | null;
          view?: string | null;
          uid?: string | null;
        };
        Update: {
          name?: string | null;
          webURL?: string | null;
          pageType?: string | null;
          shortDescription?: string | null;
          longDescription?: string | null;
          logoImageURL?: string | null;
          desktopSsURL?: string | null;
          mobileSsURL?: string | null;
          desktopFpURL?: string | null;
          mobileFpURL?: string | null;
          categories?: string[] | null;
          date?: string | null;
          view?: string | null;
          uid?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year";
      pricing_type: "one_time" | "recurring";
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (DesignDatabase["webspirre_admin"]["Tables"] &
        DesignDatabase["webspirre_admin"]["Views"])
    | { schema: keyof DesignDatabase },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof DesignDatabase;
  }
    ? keyof (DesignDatabase[PublicTableNameOrOptions["schema"]]["Tables"] &
        DesignDatabase[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof DesignDatabase }
  ? (DesignDatabase[PublicTableNameOrOptions["schema"]]["Tables"] &
      DesignDatabase[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (DesignDatabase["webspirre_admin"]["Tables"] &
      DesignDatabase["webspirre_admin"]["Views"])
  ? (DesignDatabase["webspirre_admin"]["Tables"] &
      DesignDatabase["webspirre_admin"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof DesignDatabase["webspirre_admin"]["Tables"]
    | { schema: keyof DesignDatabase },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof DesignDatabase;
  }
    ? keyof DesignDatabase[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof DesignDatabase }
  ? DesignDatabase[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof DesignDatabase["webspirre_admin"]["Tables"]
  ? DesignDatabase["webspirre_admin"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof DesignDatabase["webspirre_admin"]["Tables"]
    | { schema: keyof DesignDatabase },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof DesignDatabase;
  }
    ? keyof DesignDatabase[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof DesignDatabase }
  ? DesignDatabase[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof DesignDatabase["webspirre_admin"]["Tables"]
  ? DesignDatabase["webspirre_admin"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof DesignDatabase["webspirre_admin"]["Enums"]
    | { schema: keyof DesignDatabase },
  EnumName extends PublicEnumNameOrOptions extends {
    schema: keyof DesignDatabase;
  }
    ? keyof DesignDatabase[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof DesignDatabase }
  ? DesignDatabase[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof DesignDatabase["webspirre_admin"]["Enums"]
  ? DesignDatabase["webspirre_admin"]["Enums"][PublicEnumNameOrOptions]
  : never;
