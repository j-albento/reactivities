
using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
            .ForMember(d => d.HostUsername, opt => opt.MapFrom(s => s.Attendees.FirstOrDefault(x => x.IsHost).AppUser.UserName));

            CreateMap<Domain.ActivityAttendee, Profiles.Profile>()
            .ForMember(d => d.DisplayName, opt => opt.MapFrom(s => s.AppUser.DisplayName))
            .ForMember(d => d.DisplayName, opt => opt.MapFrom(s => s.AppUser.UserName))
            .ForMember(d => d.DisplayName, opt => opt.MapFrom(s => s.AppUser.Bio));
        }
    }
}