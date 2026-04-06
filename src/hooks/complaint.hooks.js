import { useMutation, useQuery } from "@tanstack/react-query";
import api from "@/services/axios";

// GET complaints
export const useGetComplaints = () => {
  return useQuery({
    queryKey: ["complaints"],
    queryFn: async () => {
      const res = await api.get("/complaints");
      return res.data.data;
    },
  });
};

// CREATE complaint
export const useCreateComplaint = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await api.post("/complaints/create-complaint", data);
      return res.data;
    },
  });
};